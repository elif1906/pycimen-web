const EXTENSION_ID = "ElifNurCelepoglu.PyCimen-LSP";
const ONE_DAY = 60 * 60 * 24;

export type LspStats = {
  installs: number;
  rating: number;
};

type Statistic = { statisticName: string; value: number };

// Reads public stats from the VS Code Marketplace; Next caches the response for a day.
export async function getLspStats(): Promise<LspStats | null> {
  try {
    const res = await fetch("https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json;api-version=7.1-preview.1",
      },
      body: JSON.stringify({
        filters: [{ criteria: [{ filterType: 7, value: EXTENSION_ID }] }],
        flags: 256, // include statistics
      }),
      next: { revalidate: ONE_DAY },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const stats: Statistic[] = data?.results?.[0]?.extensions?.[0]?.statistics ?? [];
    const get = (name: string) => stats.find((s) => s.statisticName === name)?.value;

    // "install" is the unique-installs figure the Marketplace page shows; "downloadCount" also counts updates.
    const installs = get("install");
    const rating = get("averagerating");
    if (installs === undefined || rating === undefined) return null;

    return { installs: Math.round(installs), rating };
  } catch {
    return null;
  }
}
