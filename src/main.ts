import { getInput } from "@actions/core";
import { setFailed } from "@actions/core";
import { exec } from "@actions/exec";
import { which } from "@actions/io";

export async function run() {
  try {
    const dotnetPath: string = await which('dotnet', true);
    const additionalSource = getInput("add-source")

    // Perform a naked restore by default
    var dotnetToolRestoreArgs = ["tool", "restore"]

    if (additionalSource) {
      dotnetToolRestoreArgs.push(`--add-source=${additionalSource}`)
    }

    const installResult = await exec(`"${dotnetPath}"`, dotnetToolRestoreArgs);

    if (installResult !== 0) {
      throw Error("There was an error restoring dotnet local tools");
    }
  } catch (error) {
    setFailed(error.message);
    throw error;
  }
}

run();
