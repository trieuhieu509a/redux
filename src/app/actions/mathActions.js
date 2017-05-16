export function addNumber(number) {
    return {
      type : "ADD",
      payload : number
    };
}

export function setAge(number) {
    return {
        type : "SUBTRACT",
        payload : number
    };
}