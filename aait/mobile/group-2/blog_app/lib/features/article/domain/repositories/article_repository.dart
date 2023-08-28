import 'package:dartz/dartz.dart';

import '../../../../core/error/failure.dart';
import '../entities/article.dart';
import '../entities/tag.dart';

abstract class ArticleRepository {
  Future<Either<Failure, List<Article>>> getAllArticles();
  Future<Either<Failure, List<Tag>>> getTags();
  Future<Either<Failure, Article>> createArticle(Article article);
  Future<Either<Failure, Article>> getArticle(String id);
  Future<Either<Failure, Article>> updateArticle(Article article);
  Future<Either<Failure, Article>> deleteArticle(String id);
}