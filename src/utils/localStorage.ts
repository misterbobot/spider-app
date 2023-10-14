export const storage = {
    get: (key: string, defaultValue?: string | string[]): string | null | string[] => {
        try {
            const result = localStorage.getItem(key);
            if (!result) return defaultValue ?? '';

            try {
                return JSON.parse(result) as string[];
            } catch {
                return result;
            }
        } catch {
            return defaultValue ?? '';
        }
    },
    set: (key: string, value: string): void => {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.error(error);
        }
    },
};
