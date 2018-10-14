using System;
using System.Collections.Immutable;

public static class Pangram
{
      private static readonly ImmutableHashSet<char> alpha = ImmutableHashSet<char>.Empty.Union("abcdefghijklmnopqrstuvwxyz");
      public static bool IsPangram(string input) => alpha.Intersect(input.ToLower()).Count == alpha.Count;
}
