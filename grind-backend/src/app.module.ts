import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';
import { ErrandModule } from './errand/errand.module';
import { PosterModule } from './poster/poster.module';
import { BoardModule } from './board/board.module';
import { StampModule } from './stamp/stamp.module';
import { DiscussionModule } from './discussion/discussion.module';
import { MediaModule } from './media/media.module';
import { LabelModule } from './label/label.module';
import { MilestoneModule } from './milestone/milestone.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { AppInitService } from './providers/initialiser';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule } from '@nestjs/config';
import { SchemeModule } from './scheme/scheme.module';
import { AuthModule } from './auth/auth.module';
import { OccurrenceModule } from './occurrence/occurrence.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GqlAuthGuard } from './auth/gql-auth.guard';
import { WorkFlowModule } from './work-flow/work-flow.module';
import { PosterFlowModule } from './poster-flow/poster-flow.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.DATABASE_URL}/grind`),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        ignoreTLS: false,
        secure: false,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      defaults: {
        from: '"No Reply" auto@grind',
      },
      preview: true,
      template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    AuthModule,
    UserModule,
    CommunityModule,
    ErrandModule,
    PosterModule,
    BoardModule,
    StampModule,
    DiscussionModule,
    MediaModule,
    LabelModule,
    SchemeModule,
    MilestoneModule,
    OccurrenceModule,
    WorkFlowModule,
    PosterFlowModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ClassSerializerInterceptor,
    // },
    AppInitService,
  ],
})
export class AppModule {}
