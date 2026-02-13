export type PrivacyPolicyContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; title?: string; items: string[] };

export type PrivacyPolicyItem = {
  number: number;
  title: string;
  content: PrivacyPolicyContentBlock[];
};

export function PrivacyPolicyItems({ items }: { items: PrivacyPolicyItem[] }) {
  return (
    <div className="flex flex-col gap-12">
      {items.map((item) => (
        <div key={item.number} className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <p className="font-bold text-[1.35rem]">{`${item.number}.`}</p>
            <h2 className="font-bold text-[1.35rem]">{item.title}</h2>
          </div>
          <div className="space-y-4">
            {item.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={`${item.number}-p-${index}`}
                    className="text-muted-foreground"
                  >
                    {block.text}
                  </p>
                );
              }
              return (
                <div key={`${item.number}-list-${index}`} className="space-y-2">
                  {block.title ? (
                    <p className="font-medium text-muted-foreground">
                      {block.title}
                    </p>
                  ) : null}
                  <ul className="space-y-2">
                    {block.items.map((listItem, i) => (
                      <li
                        key={`${item.number}-${index}-${i}`}
                        className="flex items-center gap-2"
                      >
                        <div className="size-1.5 shrink-0 rounded-full bg-foreground/60" />
                        <span className="text-muted-foreground">
                          {listItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
