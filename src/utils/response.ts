function response<T>(message:string, data: T | null = null, success: boolean = true) {

    return {
        success: success,
        message: message,
        data: data
    };
}

export default response;