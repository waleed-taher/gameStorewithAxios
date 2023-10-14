'use client'
import { FetchGenresProps, GenreProps } from "@/constants/type";
import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchProps<T> {
    count: number;
    results: T[];
}

const UseData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
      apiClient 
        .get<FetchProps<T>>(endpoint, { signal: controller.signal, ...requestConfig})
        .then((res) => {
            setData(res.data.results)
            setLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return 
            setError(error.message)
            setLoading(false)
        });

        return () => controller.abort()
    }, deps ? [...deps] :[]);

    return { data, error, isLoading }
}

export default UseData