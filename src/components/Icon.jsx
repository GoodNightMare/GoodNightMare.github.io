import {
  ArrowDownRight, ArrowUpRight, Brain, ChevronsDown, Circle, Code2,
  Database, ExternalLink, Gamepad2, GraduationCap, CodeXml, Camera,
  LayoutDashboard, BriefcaseBusiness, Mail, Menu, MessageCircle, Monitor, Mountain, Send, Users,
  Server, Sparkles, Truck, Utensils, Wallet, Wrench, X,
} from 'lucide-react'

const icons = {
  'arrow-down-right': ArrowDownRight, 'arrow-up-right': ArrowUpRight,
  brain: Brain, 'chevrons-down': ChevronsDown, 'code-2': Code2,
  database: Database, 'external-link': ExternalLink, facebook: Users,
  'gamepad-2': Gamepad2, github: CodeXml, 'graduation-cap': GraduationCap,
  instagram: Camera, 'layout-dashboard': LayoutDashboard, linkedin: BriefcaseBusiness,
  mail: Mail, menu: Menu, 'message-circle': MessageCircle, monitor: Monitor, mountain: Mountain, send: Send, server: Server,
  sparkles: Sparkles, truck: Truck, utensils: Utensils, wallet: Wallet,
  wrench: Wrench, x: X,
}

export default function Icon({ name, ...props }) {
  const Component = icons[name] || Circle
  return <Component aria-hidden="true" {...props} />
}
