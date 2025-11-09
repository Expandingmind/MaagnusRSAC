'use client'

import React from 'react'
import { 
  AlertCircle, 
  Droplets, 
  Flame, 
  Search, 
  Bath, 
  Building2, 
  Wrench,
  Clock,
  Shield,
  RefreshCw,
  Calendar,
  Truck,
  RotateCcw,
  Wind,
  Settings
} from 'lucide-react'

interface ServiceIconProps {
  name: string
  size?: number
  className?: string
}

export class ServiceIcon extends React.Component<ServiceIconProps> {
  render() {
    const { name, size = 24, className = '' } = this.props
    
    const iconProps = {
      size,
      className: `text-brand-black ${className}`,
      strokeWidth: 2
    }
    
    switch(name) {
      case 'emergency':
      case 'alert':
        return <AlertCircle {...iconProps} />
      
      case 'clock':
        return <Clock {...iconProps} />
        
      case 'droplet':
      case 'droplet2':
      case 'drain':
        return <Droplets {...iconProps} />
        
      case 'flame':
      case 'flame2':
      case 'water-heater':
        return <Flame {...iconProps} />
        
      case 'search':
      case 'leak':
        return <Search {...iconProps} />
        
      case 'bath':
      case 'bathroom':
        return <Bath {...iconProps} />
        
      case 'building':
      case 'building2':
      case 'commercial':
        return <Building2 {...iconProps} />
        
      case 'shield':
        return <Shield {...iconProps} />
        
      case 'rotate':
      case 'backflow':
        return <RotateCcw {...iconProps} />
        
      case 'calendar':
      case 'maintenance':
        return <Calendar {...iconProps} />
        
      case 'refresh':
      case 'flush':
        return <RefreshCw {...iconProps} />
        
      case 'truck':
      case 'distributor':
        return <Truck {...iconProps} />
        
      case 'wind':
        return <Wind {...iconProps} />
        
      case 'settings':
        return <Settings {...iconProps} />
        
      case 'wrench':
      case 'pipe':
      case 'pipelining':
      default:
        return <Wrench {...iconProps} />
    }
  }
}

