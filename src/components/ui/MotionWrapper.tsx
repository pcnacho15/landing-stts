import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, type UseInViewOptions, type Variants } from "framer-motion";

interface MotionWrapperProps {
    children: React.ReactNode;
    className?: string;
    initial?: any;
    whileInView?: any;
    viewport?: UseInViewOptions;
    transition?: any;
    variants?: Variants;
    delay?: number;
}

export const MotionWrapper = ({
    children,
    className = "",
    initial = { opacity: 0, y: 20 },
    whileInView = { opacity: 1, y: 0 },
    viewport = { once: true, margin: "-50px" },
    transition = { duration: 0.5, ease: "easeOut" },
    variants,
    delay = 0,
}: MotionWrapperProps) => {

    const finalTransition = { ...transition, delay };

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={finalTransition}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};
