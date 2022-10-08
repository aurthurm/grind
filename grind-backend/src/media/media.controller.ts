import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Request,
  Delete,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { deleteFile, imageResizer, multerOptions } from 'src/utils/upload';
import { MediaService } from './media.service';

@Controller('media-manager')
@ApiTags('media-files')
export class MediaController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private mediaService: MediaService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
    const { target, targetId } = req.body;
    if (!target || !targetId) {
      throw new Error('target and targetId are required');
    }
    imageResizer(file);
    return {
      media: await this.mediaService.create({ ...file, target, targetId }),
      location: 'http://' + req.headers.host + '/' + file.path,
    };
  }

  @Delete(':id')
  async deleteMediaFile(@Param('id') id: string, @Request() req) {
    const deleted = await this.mediaService.remove(id);
    try {
      await deleteFile(deleted.path);
      return { id, success: true, media: deleted };
    } catch (error) {
      return { success: false, error };
    }
  }
}
