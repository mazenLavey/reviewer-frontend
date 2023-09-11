



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
    authorId: string,
    content: string,
}

export interface NewCommentType extends Pick<CommentType, 'content'> {
    postId: string,
}

export type PostGroupType =
    | "games"
    | "movies"
    | "music"
    | "books"
    | "sports"
    | "technology"
    | "food";

export interface PostType {
    readonly _id: string,
    readonly createdAt: string,
    readonly updatedAt: string,
    postTitle: string,
    postSummary: string,
    mediaFiles: string[],
    postContent: string,
    postGroup: PostGroupType,
    postTags: string,
    postRate: number,
    author: {
        userName: string,
        readonly _id: string
    },
    likes: string[],
    comments: NewCommentType[]
}

export interface NewPostType extends Pick<PostType,
    "postTitle"
    | "postSummary"
    | "mediaFiles"
    | "postContent"
    | "postGroup"
    | "postRate"
> { 
    postTags: string[]
}

