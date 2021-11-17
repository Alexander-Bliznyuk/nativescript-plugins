package com.parempi.couchbase;

import com.couchbase.lite.*;
import com.google.gson.*;

import java.lang.reflect.Type;

public class CblJsonSerializer {
  private static Gson gson;

  public static String toJson(Object src) {
    if (gson == null) {
      gson = create();
    }
    return gson.toJson(src);
  }

  private static Gson create() {
    return new GsonBuilder()

      .registerTypeAdapter(Dictionary.class, (JsonSerializer<Dictionary>) CblJsonSerializer::serialize)
      .registerTypeAdapter(MutableDictionary.class,  (JsonSerializer<MutableDictionary>) CblJsonSerializer::serialize)

      .registerTypeAdapter(Array.class,  (JsonSerializer<Array>) CblJsonSerializer::serialize)
      .registerTypeAdapter(MutableArray.class,  (JsonSerializer<MutableArray>) CblJsonSerializer::serialize)

      .create();
  }

  private static JsonElement serialize(Dictionary src,
                                       Type typeOfSrc,
                                       JsonSerializationContext context) {
    return context.serialize(src.toMap());
  }

  private static JsonElement serialize(Array src, Type typeOfSrc,
                                       JsonSerializationContext context) {
    return context.serialize(src.toList());
  }
}
