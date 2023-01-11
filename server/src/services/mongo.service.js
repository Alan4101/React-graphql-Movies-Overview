export default class MongoService {
  constructor(model) {
    this.MongoModel = model;
  }

  async getAll() {
    return await this.MongoModel.find({});
  }

  async getById(_id) {
    return await this.MongoModel.findById({ _id });
  }

  async create(params) {
    const mongoItem = new this.MongoModel(params);
    return await mongoItem.save();
  }

  async update(params) {
    const { _id, ...rest } = params;
    return await this.MongoModel.findByIdAndUpdate(_id, { ...rest });
  }

  async deleteById(_id) {
    return await this.MongoModel.findByIdAndRemove(_id);
  }

  async deleteCollection() {
    const data = await this.MongoModel.deleteMany({});
    if (!data) {
      return {
        success: false,
        message: "Error",
      };
    }
    return {
      success: true,
      message: "Success",
    };
  }
  async login(email, password, callback) {
    try {
      const user = await this.MongoModel.findOne({ email });
      user.comparePassword(password, function (matchError, isMatch) {
        if (matchError) {
          callback({ error: true });
        } else if (!isMatch) {
          callback({ error: true });
        } else {
          callback({ success: true });
        }
      });
    } catch (error) {
      callback({ error: true });
    }
  }
}
