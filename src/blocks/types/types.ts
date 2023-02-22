enum ImageType {
    ImageJpeg = 'image/jpeg'
}

enum ImageSubtype {
    Jpeg = 'jpeg'
}

enum FileType {
    Image = 'image'
}

export type MediaUploadRenderProp = {
    open: () => any
}

type ImgSize = {
    height: number
    orientation: string,
    url: string,
    width: number
}

export type UploadImage = {
    acf_errors: boolean
    alt: string
    author: string
    authorLink: string
    authorName: string
    caption: string
    compat: {
        item: string
        meta: string
    }
    context: string
    date: Date
    dateFormatted: string
    description: string
    editLink: string
    filename: string
    filesizeHumanReadable: string
    filesizeInBytes: number
    height: number
    icon: string
    id: number
    link: string
    menuOrder: number
    meta: boolean
    mime: ImageType
    modified: Date
    name: string
    nonces: {
        update: string
        delete: string
        edit: string
    }
    orientation: string
    sizes: {
        thumbnail: ImgSize
        medium: ImgSize
        large: ImgSize
        full: ImgSize
    }
    status: string
    subtype: ImageSubtype
    title: string
    type: FileType
    uploadedTo: number
    url: string
    width: number
}