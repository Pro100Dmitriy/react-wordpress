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

export type UploadVideo = {
    acf_errors: false
    alt: ""
    author: "1"
    authorLink: "http://reactwordpress/wp-admin/profile.php"
    authorName: "admin"
    caption: ""
    compat: {item: '', meta: ''}
    context: ""
    date: Date
    dateFormatted: string
    description: "string
    editLink: "http://reactwordpress/wp-admin/post.php?post=33&action=edit"
    fileLength: "0:35"
    fileLengthHumanReadable: "0 minutes, 35 seconds"
    filename: "chrome_6ZeunVNMoS.mp4"
    filesizeHumanReadable: "5 MB"
    filesizeInBytes: 5341534
    height: 662
    icon: "http://reactwordpress/wp-includes/images/media/video.png"
    id: 33
    image: {src: 'http://reactwordpress/wp-includes/images/media/video.png', width: 48, height: 64}
    link: "http://reactwordpress/chrome_6zeunvnmos/"
    menuOrder: 0
    meta: {artist: false, album: false, bitrate: 1224409, bitrate_mode: false}
    mime: "video/mp4"
    modified: Date
    name: "chrome_6zeunvnmos"
    nonces: {update: 'ca14bacb61', delete: '8cc97cabee', edit: '71dd25bc0b'}
    status: "inherit"
    subtype: "mp4"
    thumb: {src: 'http://reactwordpress/wp-includes/images/media/video.png', width: 48, height: 64}
    title: "chrome_6ZeunVNMoS"
    type: "video"
    uploadedTo: 0
    url: "http://reactwordpress/wp-content/uploads/2023/02/chrome_6ZeunVNMoS.mp4"
    width: 1366
}