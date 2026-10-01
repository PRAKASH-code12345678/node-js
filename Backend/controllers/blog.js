import Blog from "../models/blog.js"
export const create = async (req, res) => {
    try {
        ////ab database me store karenge///
        const { title, completed } = req.body;
        const blog = await Blog.create({
            title,
            completed,
            user: req.user.userId
        })
        res.json({ message: "blog created", blog })
    } catch (error) {
        res.json({
            errors: error.message
        })
    }

}

//////ab delete ka method create karenge////
export const delte = async (req, res) => {
    try {
        ///eb ek variable lenge const naam ka
        const { id } = req.params;
        ///ab mongodb connection denge
        const blog = await Blog.findByIdAndDelete({
            _id: id,
            user: req.user.userId
        })
        ///ab condition denge
        if (!blog) {
            return res.status(404).json({ message: "blog not found" })
        }
        res.json({ message: "Blog Deleted" })

    } catch (error) {
        res.json({ errors: error.message })

    }

}


///ab update ka method create karenge///
export const update = async (req, res) => {
    try {
        const { id } = req.params
        const { title, completed } = req.body

        ////ab database call karenge
        const blog = await Blog.findByIdAndUpdate({
            _id: id,
            user: req.user.userId
        }, {
            ////ab update karenge
            title,
            completed
        }, {
            new: true
        })

        /////agar update karne pr database nhi mil raha hai ...
        /////tb condition lagayeng
        if (!blog) {
            return res.status(404).json({ message: "blog not found" })
        }
        /// agar todo hai to use update karna padega 
        res.status(200).json({
            message: "blog updated",
            blog
        })

    } catch (error) {
        res.json({ errors: error.message })

    }
}

///ab allTodos ka method create karenge///
////iske baad routes create karenge
export const allBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({createdAt:-1})
        res.status(200).json({
            count:blogs.length,
            blogs
        })

    } catch (error) {
        res.json({ errors: error.message })

    }
}