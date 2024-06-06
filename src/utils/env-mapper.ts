const buildEnv = process.env;

const envs = {
  MAPBOX_API_KEY: buildEnv["NEXT_PUBLIC_MAPBOX_API_KEY"] || "",
  EMAIL_SERVICE_ID: buildEnv["NEXT_PUBLIC_EMAIL_SERVICE_ID"] || "",
  EMAIL_FOOTER_TEMPLATE_ID: buildEnv["NEXT_PUBLIC_EMAIL_FOOTER_TEMPLATE_ID"] || "",
  EMAIL_CONTACT_TEMPLATE_ID: buildEnv["NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID"] || "",
  EMAIL_PUBLIC_KEY: buildEnv["NEXT_PUBLIC_EMAIL_PUBLIC_KEY"] || "",
  YOUTUBE_VIDEO_ID: buildEnv["NEXT_PUBLIC_YOUTUBE_VIDEO_ID"] || "",
};

export const getBuildEnv = (key: keyof typeof envs) => envs[key];

export function getEnvironmentVariable(name: any) {
  if (typeof window !== "undefined") {
    return process.env[name];
  } else {
    return process.env[name] || "";
  }
}
