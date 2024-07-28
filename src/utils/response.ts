function response<T>(message:string, success: boolean = true,  data: T | null = null) {

    return {
        success: success,
        message: message,
        data: data
    }
}

export default response;