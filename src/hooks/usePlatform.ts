'use client'
import { PlatformProps } from "@/constants/type";
import UseData from "./useData";

const UsePlatform = () => UseData<PlatformProps>('/platforms/lists/parents')

export default UsePlatform