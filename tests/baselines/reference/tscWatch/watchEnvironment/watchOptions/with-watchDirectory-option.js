currentDirectory:: /user/username/projects/project useCaseSensitiveFileNames:: false
Input::
//// [/user/username/projects/project/commonFile1.ts] Inode:: 5
let x = 1

//// [/user/username/projects/project/commonFile2.ts] Inode:: 6
let y = 1

//// [/user/username/projects/project/tsconfig.json] Inode:: 7
{
  "watchOptions": {
    "watchDirectory": "UseFsEvents"
  }
}

//// [/home/src/tslibs/TS/Lib/lib.d.ts] Inode:: 13
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/home/src/tslibs/TS/Lib/tsc.js -w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/project/commonFile1.js] Inode:: 113
var x = 1;


//// [/user/username/projects/project/commonFile2.js] Inode:: 114
var y = 1;



PolledWatches::
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/tslibs/TS/Lib/lib.d.ts: *new*
  {"inode":13}
/user/username/projects/project: *new*
  {"inode":4}
/user/username/projects/project/commonFile1.ts: *new*
  {"inode":5}
/user/username/projects/project/commonFile2.ts: *new*
  {"inode":6}
/user/username/projects/project/tsconfig.json: *new*
  {"inode":7}

Program root files: [
  "/user/username/projects/project/commonFile1.ts",
  "/user/username/projects/project/commonFile2.ts"
]
Program options: {
  "watch": true,
  "configFilePath": "/user/username/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/project/commonFile1.ts
/user/username/projects/project/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/project/commonFile1.ts
/user/username/projects/project/commonFile2.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/user/username/projects/project/commonfile1.ts (used version)
/user/username/projects/project/commonfile2.ts (used version)

exitCode:: ExitStatus.undefined
