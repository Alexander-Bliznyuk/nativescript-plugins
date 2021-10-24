package com.parempi.couchbase;

public interface Promise {
  void resolve(Object value);
  void resolve();
  void reject(String message);
}
