import { ReactNode } from "react";

interface GlassCardProps {
    className?: string;
    children: ReactNode;
}

export default function GlassCard({ className = "", children }: GlassCardProps) {
    return (
        <div className={`glass rounded-xl ${className}`}>
            {children}
        </div>
    );
} 