import { motion } from "framer-motion";
import clsx from "clsx";
import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";

type ButtonWithIconProps<T extends ElementType> = {
  as?: T;
  href?: string;
  openInNewTab?: boolean;
  className?: string;
  icon?: React.ReactNode;
} & ComponentPropsWithRef<T>;

const ButtonWithIcon = forwardRef<
  HTMLElement,
  ButtonWithIconProps<ElementType>
>(({ as, href, openInNewTab, className, children, icon, ...props }, ref) => {
  const Component = as || (href ? "a" : "button");
  const MotionComponent = motion(Component as ElementType);

  const linkProps = href
    ? {
        href,
        target: openInNewTab ? "_blank" : undefined,
        rel: openInNewTab ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <MotionComponent
      ref={ref}
      {...linkProps}
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={clsx(
        "group p-4 px-8 flex items-center text-black gap-2 justify-center rounded-[1rem]",
        "bg-gradient-to-r from-[#FFEA7E] to-[#FFDB1A]",
        className,
      )}
    >
      {children}
      <motion.div
        whileHover={{ rotate: 45 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>
    </MotionComponent>
  );
});

ButtonWithIcon.displayName = "ButtonWithIcon";
export default ButtonWithIcon;
