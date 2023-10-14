import NoImage from '@/assets/NoImage.png'

export default function OptimizeImage(url: string) {
    if(!url) return NoImage
    return url.replace(/media\//, 'media/crop/600/400/')
    
}