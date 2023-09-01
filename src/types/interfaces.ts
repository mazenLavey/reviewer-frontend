



export interface UserType {
    readonly id: string,
    readonly createdAt: string,
    userName: string,
    userEmail: string,
    userPassword: string,
    status: "active" | "blocked"
}

export interface LogInUserType extends Pick<UserType, 'userEmail' | 'userPassword'> { }

export interface RegisterNewUserType extends Pick<UserType, 'userName' | 'userEmail' | 'userPassword'> {
    confirmPassword: string
}

export interface CommentType {
    readonly createdAt: string,
    authorEmail: string,
    commentContent: string,
}

export interface NewCommentType extends Pick<CommentType, 'authorEmail' | 'commentContent'> { }

export interface PostType {
    readonly id?: string,
    readonly createdAt?: string,
    readonly updatedAt?: string,
    postTitle: string,
    postSummary: string,
    mediaFiles: [],
    postContent: string,
    author: [],
    likes: string,
    comments: string[]
}

export interface NewPostType extends Pick<PostType,
    "postTitle"
    | "postSummary"
    | "mediaFiles"
    | "postContent"
> { }

