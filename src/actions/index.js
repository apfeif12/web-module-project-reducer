export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const MEMORY_RECALL = "MEMORY_RECALL";

export const applyNumber = (number) => {
    return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
    return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
    return { type: CLEAR_DISPLAY };
};

export const memoryPlus = (total) => {
    return { type: MEMORY_PLUS, payload: total };
};

export const memoryClear = () => {
    return { type: MEMORY_CLEAR };
};

export const memoryRecall = (memory) => {
    return { type: MEMORY_RECALL, payload: memory };
};


