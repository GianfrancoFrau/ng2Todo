// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

/// <reference path="../typings/index.d.ts" />
declare var module: { id: string };

/** Allows the use of require('module') inside .ts files **/
declare function require(id: string): any;
