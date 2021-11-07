import { setFailed } from "@actions/core";
import { exec } from "@actions/exec";
import { which } from "@actions/io";

export async function run() {
  try {
    const dotnetPath: string = await which('dotnet', true);
    const installResult = await exec(`"${dotnetPath}"`, ["tool", "restore"]);

    if (installResult !== 0) {
      throw Error("There was an error restoring dotnet local tools");
    }
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    } else {
      throw error;
    }
  }
}

run();
