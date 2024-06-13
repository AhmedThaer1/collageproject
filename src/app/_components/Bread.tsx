import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

import { Slash } from "lucide-react";

import { type BreadProps } from "~/interFaces/interface";

export default function Bread({
  prevTitle,
  prevUrl,
  currentTitle,
  currentUrl,
}: BreadProps) {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="font-bold underline underline-offset-4"
              href={prevUrl}
            >
              {prevTitle}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="font-semibold underline underline-offset-4"
              href={currentUrl}
            >
              {currentTitle}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
