'use client'
import { GenreProps } from "@/constants/type";
import UseData from "./useData";

const UseGenre = () => UseData<GenreProps>('/genres')

export default UseGenre