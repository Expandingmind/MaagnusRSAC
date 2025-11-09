import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 'YOUR_API_KEY')

// Email recipients
const EMAIL_RECIPIENTS = [
  'guillermo@miamirsac.com'
]

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Extract form data
    const {
      name,
      email,
      phone,
      service,
      message,
      address,
      preferredTime,
      formType = 'Contact Form'
    } = data

    // Create email HTML content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #60A5FA; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #E8B243; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd; text-align: center; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New ${formType} Submission</h1>
              <p>Magnus R&S A/C</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name || 'Not provided'}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email || 'Not provided'}</div>
              </div>
              
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || 'Not provided'}</div>
              </div>
              
              ${service ? `
              <div class="field">
                <div class="label">Service Requested:</div>
                <div class="value">${service}</div>
              </div>
              ` : ''}
              
              ${address ? `
              <div class="field">
                <div class="label">Address:</div>
                <div class="value">${address}</div>
              </div>
              ` : ''}
              
              ${preferredTime ? `
              <div class="field">
                <div class="label">Preferred Time:</div>
                <div class="value">${preferredTime}</div>
              </div>
              ` : ''}
              
              ${message ? `
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
              ` : ''}
            </div>
            
            <div class="footer">
              <p>This lead was submitted from the Magnus R&S A/C website.</p>
              <p>Please respond within 1 hour for best conversion.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Create plain text version
    const emailText = `
New ${formType} Submission - Magnus R&S A/C

Name: ${name || 'Not provided'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}
${service ? `Service Requested: ${service}` : ''}
${address ? `Address: ${address}` : ''}
${preferredTime ? `Preferred Time: ${preferredTime}` : ''}
${message ? `Message: ${message}` : ''}

This lead was submitted from the Magnus R&S A/C website.
Please respond within 1 hour for best conversion.
    `.trim()

    // Send email to all recipients
    const emailPromises = EMAIL_RECIPIENTS.map(recipient => 
      resend.emails.send({
        from: 'Magnus R&S A/C <onboarding@resend.dev>',
        to: recipient,
        subject: `New ${formType} Lead - ${name || 'Website Visitor'}`,
        html: emailHtml,
        text: emailText,
        replyTo: email || 'guillermo@miamirsac.com'
      })
    )

    // Wait for all emails to be sent
    const results = await Promise.all(emailPromises)
    
    // Check if all emails were sent successfully
    const allSent = results.every(result => result.data?.id)
    
    if (!allSent) {
      throw new Error('Some emails failed to send')
    }

    return NextResponse.json({
      success: true,
      message: 'Your request has been submitted successfully! We\'ll contact you within 1 hour.',
      emailsSent: EMAIL_RECIPIENTS.length
    })

  } catch (error) {
    console.error('Form submission error:', error)
    
    // Still return success to user but log the error
    return NextResponse.json({
      success: true,
      message: 'Thank you for your submission! We\'ll be in touch soon.',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    })
  }
}

