module.exports = (err :any, req:any, res:any, next:any) => {
    return res.status(500).send("Something went wrong!!")
}