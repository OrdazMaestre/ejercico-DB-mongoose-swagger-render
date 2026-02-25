module.exports = {
  paths: {
    "/": {
      post: {
        tags: {
          Tasks: "Get a task",
        },
        description: "Get task",
        operationId: "getTask",
        parameters: [],

        responses: {
          200: {
            description: "Task obtained successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/create": {
      post: {
        tags: {
          Tasks: "Create a task",
        },
        description: "Create task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/markAsCompleted/{_id}": {
      put: {
        tags: [
          "Tasks"
        ],
        summary: "Update a task as completed",
        description: "Update Task as completed",
        operationId: "updateTaskASCompleted",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            description: "Id of Task to be updated as completed",
            schema: {
              $ref: "#/components/schemas/_id"
            }
          }
        ],
        responses: {
          200: { description: "User updated successfully" },
          404: { description: "Task not found" },
          500: { description: "Server error" },
        },
      },
    },
    "/id/{_id}": {
      put: {
        tags: {
          Tasks: "Update a task",
        },
        description: "Update task",
        operationId: "updateTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of task to be updated",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        responses: {
          200: { description: "User updated successfully" },
          404: { description: "Task not found" },
          500: { description: "Server error" },
        },
      },
      delete: {
        tags: {
          Tasks: "Delete a task",
        },
        description: "Delete task",
        operationId: "deleteTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of task to be deleted",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Task" },
            },
          },
        },
        responses: {
          200: { description: "Task deleted successfully" },
          404: { description: "Task not found" },
          500: { description: "Server error" },
        },
      },
    },

  },
};
