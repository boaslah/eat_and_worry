import run from "./gemini.cjs"
import showdown from "showdown"

export default {
    index(req, res){
        res.render("web/index");
    },
    chat(req, res){
        res.render("web/chat")
    },
    async sendRequest(req, res){
        const converter = new showdown.Converter();
        const input = req.body.message
        let result = await run.run(input)
        result = converter.makeHtml(result)
        res.json({"response": result})
    }
}