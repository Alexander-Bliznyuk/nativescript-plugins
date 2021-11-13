package com.parempi.couchbase;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
public class ThreadedExecutor {
  private static ExecutorService executorService;

  public static void promisifyThread(Promise promise,
                                     Callable<Object> callable) {
    executorService.execute(() -> {
      try {
        promise.resolve(callable.call());
      } catch (Exception e) {
        promise.reject(e.getMessage());
      }
    });
  }

  public static void setExecutorService(ExecutorService executorService) {
    ThreadedExecutor.executorService = executorService;
  }
}
