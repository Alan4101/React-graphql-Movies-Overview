import { Model } from "mongoose";

type TUpdateModel = {
  _id: string;
  shouldUpdateFields: {
    [key: string]: any;
  };
};

interface IMongoClient {
  get<T>(): Promise<T>;
  getById<T, U>(_id: T): Promise<U>;
  create<T, U>(param: T): Promise<U>;
  
  updateById<U>(args: TUpdateModel): Promise<U>;

  deleteById<T, U>(_id: T): Promise<U>;
  deleteAllInModel(): any;
}

export class MongoClient implements IMongoClient {
  public modelMongo;
  constructor(model: Model<any>) {
    this.modelMongo = model;
  }
  get<T>(): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      try {
        const res = await this.modelMongo.find({});
        resolve(res as T);
      } catch (error) {
        reject(error);
      }
    });
  }
  getById<T, U>(_id: T): Promise<U> {
    return new Promise<U>(async (resolve, reject) => {
      try {
        const res = await this.modelMongo.findById({ _id });
        resolve(res as U);
      } catch (error) {
        reject(error);
      }
    });
  }
  create<T, U>(args: T): Promise<U> {
    return new Promise(async (resolve, reject) => {
      try {
        const movie = new this.modelMongo({ ...args });
        const res = await movie.save();
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }
  updateById<U>(args: TUpdateModel): Promise<U> {
    return new Promise(async (resolve, reject) => {
      try {
        const { _id, shouldUpdateFields } = args;
        const res = await this.modelMongo.findByIdAndUpdate(_id, {
          ...shouldUpdateFields,
        });
        resolve(res as U);
      } catch (error) {
        reject(error);
      }
    });
  }
  deleteById<T, U>(_id: T): Promise<U> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.modelMongo.findByIdAndRemove(_id);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }
  async deleteAllInModel() {
    try {
      const res = await this.modelMongo.deleteMany({});
      if (!res) {
        return {
          success: false,
          message: "Error",
        };
      }
      return {
        success: true,
        message: "Success",
      };
    } catch (error) {
      return error;
    }
  }
}
