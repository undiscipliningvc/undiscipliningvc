#!/usr/bin/env bash

readonly PROGNAME=$(basename $0)
readonly PROGDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
readonly ARGS="$@"

cd -- "$(dirname "$BASH_SOURCE")"
${PROGDIR}/update_github.sh
