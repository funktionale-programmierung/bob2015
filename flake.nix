{
  description = "Commands for development of the BOBKonf website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        jekyllFull = pkgs.jekyll.override {
          # this way jekyll knows all the necessary plugins
          withOptionalDependencies = true;
        };
      in {
        packages.default = pkgs.writeShellScriptBin "serve"
          "${pkgs.lib.getExe jekyllFull} serve --watch --incremental";

        devShells.default =
          pkgs.mkShell { nativeBuildInputs = [ jekyllFull ]; };

        formatter = pkgs.nixfmt;
      });
}
