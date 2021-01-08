import { andrewCohenCorrect } from "../database/user/user.mocks";
import { CommunityModel } from "../database/community/community.model";
import { UserModel } from "../database/user/user.model";
import { globalCommunity } from "../database/community/community.mocks";
import { globalBoard } from "../database/board/board.mocks";
import { BoardModel } from "../database/board/board.model";
import { firstPost } from "../database/post/post.mocks";
import { PostModel } from "../database/post/post.model";


export async function createDummyCommunity() {
    // to fix duplicate key error
    await UserModel.deleteMany({});
    await CommunityModel.deleteMany({});

    // create new user
    const newUser = await createDummyUser();

    // add new user to community
    globalCommunity.users.push(newUser._id);

    // create new community
    return await CommunityModel.create(globalCommunity);
}

export async function createDummyBoard() {
    // add community
    const community = await createDummyCommunity();

    // add document
    globalBoard.community = community._id;

    return await BoardModel.create(globalBoard);
}

export async function createDummyUser() {
    // create new user
    return await UserModel.create(andrewCohenCorrect);
}

export async function createDummyPost() {
    // create board
    const board = await createDummyBoard();

    // populate post with data
    firstPost.board = board._id;
    firstPost.poster = (await UserModel.find())[0]._id;

    // create post
    return await PostModel.create(firstPost);
}