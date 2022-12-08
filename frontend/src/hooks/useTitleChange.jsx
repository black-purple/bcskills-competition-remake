import { useEffect } from "react";

export default function useTitleChange(title) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = "HealthCare • " + title;
        return () => {
            document.title = prevTitle;
        };
    });
}
