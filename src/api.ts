const SERVER = "https://user591149352-kbnk5iug.tunnel.vk-apps.com";

export async function reg(name: string, letter: string) {
    await fetch(`${SERVER}/reg`, {
        method: "POST",
        body: JSON.stringify({name, letter})
    });
}