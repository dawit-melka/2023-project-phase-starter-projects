import 'package:equatable/equatable.dart';

abstract class Failure extends Equatable {
  const Failure(String s); // Declare the constructor as const

  @override
  List<Object?> get props => []; // Implement the 'props' getter
}

// General failures
class ServerFailure extends Failure {
  const ServerFailure(super.s);
}

class CacheFailure extends Failure {
  const CacheFailure(super.s);
}
