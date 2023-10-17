import { useEffect, useState } from "react";

interface ScrollToSectionProps {
  sectionIds: string[];
}

const useSmoothScrollToSections = ({
  sectionIds,
}: ScrollToSectionProps): void => {
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScrollToSection = (event: WheelEvent) => {
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      setScrolling(true);

      const deltaY = event.deltaY;
      const currentSectionIndex = sectionIds.findIndex((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0;
        }
        return false;
      });

      if (currentSectionIndex !== -1) {
        let targetIndex = currentSectionIndex;
        if (deltaY > 0 && targetIndex < sectionIds.length - 1) {
          targetIndex += 1;
        } else if (deltaY < 0 && targetIndex > 0) {
          targetIndex -= 1;
        }

        const targetSectionId = sectionIds[targetIndex];
        const targetElement = document.getElementById(targetSectionId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });

          // Wait for the smooth scroll animation to finish
          setTimeout(() => {
            setScrolling(false);
          }, 1000); // Adjust the timeout based on your scroll animation duration
        }
      }
    };

    window.addEventListener("wheel", handleScrollToSection);

    return () => {
      window.removeEventListener("wheel", handleScrollToSection);
    };
  }, [sectionIds, isScrolling]);
};

export default useSmoothScrollToSections;
