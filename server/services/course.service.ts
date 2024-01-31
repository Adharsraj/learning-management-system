import { Response } from "express";
import { redis } from "../utils/redis";
import courseModel from "../models/course.model";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors";

//get user by id
export const createCourse = catchAsyncErrors(
  async (data: any, res: Response) => {
    const course = await courseModel.create(data);
    res.status(201).json({
      success: true,
      course,
    });
  }
);
