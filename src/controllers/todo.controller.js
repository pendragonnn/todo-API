const TodoModel = require("../models/todo.model");

class TodoController {
  static getAllTodo = async (req, res) => {
    try {
      const result = await TodoModel.findAll({attributes: ['id', 'title', 'description', 'completed'], where: {isDeleted: false}} );

      res.status(200).json({
        status: "Success",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "internal server error",
      });
    }
  };

  static getTodoById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await TodoModel.findOne({ where: { id }, attributes: ['id', 'title', 'description', 'completed', 'isDeleted'] });

      if (!result || result.dataValues.isDeleted) { 
        res.status(404).json({
          status: "Fail",
          message: "Data not found",
        });
      } else {
        res.status(200).json({
          status: "Success",
          data: result,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "internal server error",
      });
    }
  };

  static postTodo = async (req, res) => {
    try {
      const { title, description } = req.body;

      const result = await TodoModel.create({
        title: title,
        description: description,
      });

      res.status(200).json({
        status: "Success",
        message: `Successfully add data with id ${result.id}`,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "internal server error" + error,
      });
    }
  };

  static updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;

      const idExist = await TodoModel.findOne({ where: { id } });

      if (!idExist || idExist.dataValues.isDeleted) {
        res.status(404).json({
          status: "Fail",
          message: "Data not found",
        });
      } else {
        await TodoModel.update(
          { title: title, description: description },
          {
            where: {
              id: id,
            },
          }
        );

        res.status(200).json({
          status: "Success",
          message: `Successfully update data with id ${id}`,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "internal server error",
      });
    }
  };

  static deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;

      const idExist = await TodoModel.findOne({ where: { id } });

      if (!idExist || idExist.dataValues.isDeleted) {
        res.status(404).json({
          status: "Fail",
          message: "Data not found",
        });
      } else {
        await TodoModel.update(
          { isDeleted: true },
          {
            where: {
              id: id,
            },
          }
        );

        res.status(200).json({
          status: "Success",
          message: `Successfully delete data with id ${id}`,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "internal server error",
      });
    }
  };

  static doneTodo = async (req, res) => {
    try {
      const { id } = req.params;

      const idExist = await TodoModel.findOne({ where: { id } });
      if (!idExist || idExist.dataValues.isDeleted) {
        res.status(404).json({
          status: "fail",
          message: "data not found",
        });
      } else {
        await TodoModel.update({completed: true}, { where: { id } });

        res.status(200).json({
          status: "success",
          message: `successfully update data with id ${id}`,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "internal server error",
      });
    }
  };
}

module.exports = TodoController;
