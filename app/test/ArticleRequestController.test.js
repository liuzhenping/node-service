import ArticleRequestController from "../controllers/ArticleRequestController";
import Article from "../models/Article";
import HttpStatus from "../constant/HttpStatus";

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};
const res = mockResponse();
jest.mock("../models/Article");

const articleInfo = {
    _id: "5ec8fc94c166d32f8cd658cb",
    title: "444",
    content: "test222",
    createTime: "2020-05-23T10:36:04.020Z",
    updateTime: "2020-05-23T10:40:09.467Z",
};

describe("Successful cases", () => {
    it("should respond with successful result when create new article", async () => {
        //given
        Article.mockImplementation(() => {
            return {
                save: jest.fn().mockResolvedValueOnce(articleInfo)
            };
        });
        const req = {body: articleInfo};

        //when
        await ArticleRequestController.createArticle(req, res);

        //then
        expect(res.status).toHaveBeenCalledWith(HttpStatus.CREATED);
        expect(res.json).toHaveBeenCalledWith({
            result: articleInfo
        });
    });

});
