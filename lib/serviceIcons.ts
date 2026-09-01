import {
  ChalkboardTeacher,
  ChartLineUp,
  Files,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";

// One icon per service, from a single icon family (Phosphor, light weight).
export const serviceIcons: Record<string, React.ElementType> = {
  "gap-analysis": MagnifyingGlass,
  documentation: Files,
  training: ChalkboardTeacher,
  "managing-monitoring": ChartLineUp,
};

export function serviceIcon(slug: string): React.ElementType {
  return serviceIcons[slug] ?? MagnifyingGlass;
}
