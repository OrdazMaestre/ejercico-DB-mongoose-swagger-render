module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"Tasks identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"Title task to register",
                        example:"create something"
                    },
 complete:{
                        type:'boolean',
                        description:"Status of the task",
                        example:"false"
                    },

                }
            }
        }
    }
}
