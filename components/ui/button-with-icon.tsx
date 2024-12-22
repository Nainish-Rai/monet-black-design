import { motion } from "framer-motion";
import clsx from "clsx";
import React, { forwardRef } from "react";

interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  openInNewTab?: boolean;
}

const ButtonWithIcon = forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  (
    { icon, className, children = "Button", as, openInNewTab, href, ...props },
    ref,
  ) => {
    // Use provided 'as' component, or if href is provided use 'a', otherwise use 'button'
    const Component = as || (href ? "a" : "button");
    const MotionComponent = motion(Component);

    // Add linkProps only if href is provided or Component is 'a'
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
  },
);

ButtonWithIcon.displayName = "ButtonWithIcon";
export default ButtonWithIcon;
